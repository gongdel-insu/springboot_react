#!/bin/bash
/home/ec2-user/app/travis/deploy_react.sh > /dev/null 2> /dev/null < /dev/null &
/home/ec2-user/app/travis/deploy.sh >  /dev/null 2> /dev/null < /dev/null &