const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-serverless",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zpa4vlbih7.execute-api.us-east-1.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ieGbJ1dPk",
    APP_CLIENT_ID: "1e91qo09rl59ebj0p9qh45681v",
    IDENTITY_POOL_ID: "us-west-2:9651da4f-8fbe-4929-af04-e3c157b9eae2",
  },
};

export default config;
