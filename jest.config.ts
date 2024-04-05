import { compilerOptions } from './tsconfig.json';
import type {Config} from 'jest';

const config: Config = {
  rootDir: '.',
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  collectCoverage: false,
  modulePaths: [compilerOptions.baseUrl],
  reporters: [['github-actions', { silent: false }], 'summary', 'default'],
  coverageReporters: ['text-summary', 'lcov'],
  testEnvironment: 'node',
  // setupFiles: ['<rootDir>/test/setup-tests.ts'],
  testMatch: ['<rootDir>/(test|client)/**/*.test.ts']
};

export default config;
