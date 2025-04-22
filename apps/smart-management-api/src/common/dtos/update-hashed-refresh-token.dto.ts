import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateHashedRefreshTokenDto {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  hashedRefreshToken: string | null;
}
