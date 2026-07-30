FROM node:22-alpine AS builder


WORKDIR /app


RUN corepack enable


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --frozen-lockfile


COPY . .


RUN pnpm prisma generate


RUN pnpm build



FROM node:22-alpine


WORKDIR /app


RUN corepack enable


COPY package.json pnpm-lock.yaml ./


RUN pnpm install --prod --frozen-lockfile



COPY --from=builder /app/dist ./dist

COPY --from=builder /app/prisma ./prisma

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma



EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate deploy && node dist/main.js"]

