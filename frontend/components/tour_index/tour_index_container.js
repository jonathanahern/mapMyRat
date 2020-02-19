import { connect } from 'react-redux';
// import { fetchRodents } from '../../actions/rodent_actions';
import TourIndex from './tour_index';

const mapStateToProps = state => ({
    // rodents: Object.values(state.entities.rodents)
});

const mapDispatchToProps = dispatch => ({
    // fetchRodents: () => dispatch(fetchRodents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TourIndex);