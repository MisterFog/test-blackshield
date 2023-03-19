import NewForm from './components/NewForm';
import { config } from '../../@configuration-form';

const HomePage = () => {
  return (
    <div className="blackshield-content">
      <div className="blackshield-wrap">
        <h2>Авторизация</h2>
        <p>
          Для доступа к личному кабинете вашей <br /> компании авторизуйтесь на сайте
        </p>

        <NewForm config={config} />

        <button
          form="new_form"
          type="submit"
          disabled={false}
          className="btn-flip"
          data-back="Войти"
          data-front="Войти"
        />
      </div>
    </div>
  );
};

export default HomePage;
