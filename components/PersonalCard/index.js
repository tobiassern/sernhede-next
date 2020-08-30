import styles from './personalCard.module.scss';

const PersonalCard = () => (
  <div className={styles['personal-card-container']}>
    <div className="row middle-xs center-xs">
      <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6">
        <div className={styles['personal-card']} >
          <h1>Tobias Sernhede</h1>
        </div>
      </div>
    </div>
  </div>
)

export default PersonalCard;