import { Controller, Post, Body } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  @Post()
  register(@Body() body: any) {
    console.log('User registered:', body);
    return { message: 'User registered successfully!' };
  }
}
