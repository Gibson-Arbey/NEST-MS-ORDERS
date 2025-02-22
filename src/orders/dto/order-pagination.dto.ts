
import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';


export class OrderPaginationDto extends PaginationDto {

  @IsOptional()
  @IsEnum( OrderStatusList, {
    message: `El estatus no es valido, estos son los datos validos: ${ OrderStatusList }`
  })
  status: OrderStatus;


}
