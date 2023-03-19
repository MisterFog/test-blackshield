import NewForm from './components/NewForm';
import { config } from '../../@configuration-form';

const HomePage = () => {
  return (
    <div className="blackshield-content">
      <div className="blackshield-wrap">
        <h2>Authorization</h2>
        <p>Log in to the site to access the personal account of your company.</p>

        <NewForm config={config} />

        <button
          form="new_form"
          type="submit"
          disabled={false}
          className="btn-flip"
          data-back="Inter"
          data-front="Submit"
        />
      </div>
    </div>
  );
};

export default HomePage;
