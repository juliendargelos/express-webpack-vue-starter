import express from 'express'
import path from 'path'
import application from './application'

application.use(express.static(path.join(__dirname, '../client')))
