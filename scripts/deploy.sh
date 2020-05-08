#!/bin/bash

echo "$1" | docker login registry.gitlab.com -u gitlab-ci-token --password-stdin
docker stop marsh_tree
docker rm marsh_tree

docker run \
-d \
--restart always \
--name marsh_tree \
--net nginx-proxy \
registry.gitlab.com/jrs40492/marsh_tree:$2

docker image prune -a --force --filter "until=4h"
