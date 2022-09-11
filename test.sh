#!/usr/bin/env bash
npx prisma migrate reset --force --skip-generate && npx jest --watchAll --detectOpenHandles