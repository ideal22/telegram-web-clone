import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar';
import { FC } from 'react';

interface Props {
  email: string;
  avatar: string;
}

const UserAvatar: FC<Props> = ({ email, avatar }) => {
  return (
    <Avatar className="z-40">
      <AvatarImage src={avatar} alt="Avatar Image" className="object-cover" />
      <AvatarFallback className="uppercase">{email[0]}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
