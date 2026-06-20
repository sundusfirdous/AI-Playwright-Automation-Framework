FROM mcr.microsoft.com/playwright:v1.61.0-noble

WORKDIR /app

COPY automation/ ./automation/

WORKDIR /app/automation

RUN npm install

CMD ["npx", "playwright", "test"]