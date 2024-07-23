const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');

class CdkDrreferenceApiStack extends cdk.Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new lambda.Function(this, 'MyLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('lambda', {
        exclude: ['dist', 'node_modules']
      }),
      handler: 'src/index.handler',
      retryAttempts: 0
    });
  }
}

module.exports = { CdkDrreferenceApiStack }
