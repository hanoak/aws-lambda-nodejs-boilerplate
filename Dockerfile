FROM public.ecr.aws/lambda/nodejs:20

# Add your app's env here
ENV EXAMPLE_ENV=example
ENV NODE_ENV=production

WORKDIR ${LAMBDA_TASK_ROOT}

COPY package*.json ${LAMBDA_TASK_ROOT}/

RUN npm install --omit=dev

ADD src ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]
