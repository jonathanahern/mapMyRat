import { connect } from 'react-redux';
import { fetchTours } from '../../actions/tour_actions';
import TourIndex from './tour_index';

const mapStateToProps = state => ({
    tours: Object.values(state.entities.tours),
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    fetchTours: () => dispatch(fetchTours())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourIndex);