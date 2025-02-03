#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { BackendStack } from '../lib/backend-stack';
import { ArtistAppStack } from '../lib/artist-app-stack';
import { AppStack } from '../lib/app-stack';

const infrastructure = new App();

const backendStack = new BackendStack(infrastructure, process.env.BACKEND_STACK_NAME!, {
   env: { 
    account: process.env.ACCOUNT!, 
    region: process.env.REGION! 
  }
});

const appStack = new AppStack(infrastructure, process.env.APP_STACK_NAME!, {
  env: { 
   account: process.env.ACCOUNT!, 
   region: process.env.REGION! 
 }
});

const artistAppStack = new ArtistAppStack(infrastructure, process.env.ARTIST_APP_STACK_NAME!, {
  env: { 
   account: process.env.ACCOUNT!, 
   region: process.env.REGION! 
 }
});