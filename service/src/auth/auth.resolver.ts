import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async signup(@Args('input') input: SignupInput): Promise<string> {
    const user = await this.authService.signup(input.email, input.password);
    return `ユーザー登録成功: ${user.email}`;
  }

  @Mutation(() => String)
  async login(@Args('input') input: LoginInput): Promise<string> {
    const { accessToken } = await this.authService.login(
      input.email,
      input.password,
    );
    return accessToken;
  }
}
