import express from 'express';
import { Parser } from './parser.js';

export const app = express();

app.get('/api/whoami', (req, res) => {
	res.status(200).json(Parser.parseRequest(req));
});