import { IUser } from '@/shared/lib/types';

import EmptyUsersMessage from './empty-users-message';
import UsersListItem from './users-list-item';
// import Loader from '@/shared/ui/loader';

const users: IUser[] = [
  {
    _id: '1',
    email: 'test@mail.ru',
    avatar: 'https://github.com/shadcn.png',
  },
  {
    _id: '2',
    email: 'best1@mail.ru',
    avatar: '',
  },
  {
    _id: '3',
    email: 'aest3@mail.ru',
    avatar: '',
  },
];

const UsersList = () => {
  return (
    <div>
      {/* <Loader /> */}
      {!users.length && <EmptyUsersMessage />}
      {users.map((user) => (
        <UsersListItem key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
