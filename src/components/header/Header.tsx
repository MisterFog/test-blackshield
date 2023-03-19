import { useAppSelector } from '../../hooks/hooks';

const Header = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <header className="blackshield-header">
      <div>Blackshield - Developer Challenge</div>
      {user.email && <div className="blackshield-avatar">{user.email}</div>}
    </header>
  );
};

export default Header;
