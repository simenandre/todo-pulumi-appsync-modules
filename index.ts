import * as aws from '@pulumi/aws';
import api from './api';

export const apiKey = new aws.appsync.ApiKey('main-key', {
  apiId: api.api.id,
})

export const uris = api.api.uris;
