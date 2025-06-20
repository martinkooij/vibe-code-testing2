#!/bin/bash
mkdir -p ./src/proto
buf generate buf.build/rocsys/apis:e3722fbc3aa24870b0d85e9c65621d4c --template buf.gen.yaml -o ./src/proto
  

