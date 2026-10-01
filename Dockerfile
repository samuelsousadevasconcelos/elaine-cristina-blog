FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NOINDEX_ALL e NEXT_PUBLIC_SITE_URL sao lidos em tempo de build (robots.ts/
# sitemap.ts/layout.tsx geram rotas estaticas) — precisam chegar como build
# arg, nao so como env var de runtime do container.
ARG NOINDEX_ALL
ARG NEXT_PUBLIC_SITE_URL
ENV NOINDEX_ALL=$NOINDEX_ALL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]
