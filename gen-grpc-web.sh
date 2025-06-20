#!/bin/bash
mkdir -p ./src/proto
protoc -I=. ./proto/local.proto \
  --js_out=import_style=commonjs:./src/proto \
  --experimental_allow_proto3_optional \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/proto

