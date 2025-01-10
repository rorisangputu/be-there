import express, {Request, Response} from 'express'
import { check, validationResult } from 'express-validator'
import User from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
