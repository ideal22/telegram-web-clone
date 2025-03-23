import { Avatar, AvatarImage, AvatarFallback } from '@/shared/ui/avatar';
import { FC } from 'react';

interface Props {
  email: string;
  avatar: string;
  avatarStyle?: string;
  avatarFallbackStyle?: string;
}

const UserAvatar: FC<Props> = ({
  email,
  avatar,
  avatarFallbackStyle,
  avatarStyle,
}) => {
  const avatarStyles = avatarStyle ? avatarStyle : 'z-40';
  const avatarFallbackStyles = avatarFallbackStyle
    ? avatarFallbackStyle
    : 'uppercase';
  return (
    <Avatar className={avatarStyles}>
      <AvatarImage src={avatar} alt="Avatar Image" className="object-cover" />
      <AvatarFallback className={avatarFallbackStyles}>
        {email[0]}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
