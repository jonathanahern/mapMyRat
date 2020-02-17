import { connect } from 'react-redux';
import { createTour } from '../../actions/tour_actions';
import TourMap from './tour_map';

const mapStateToProps = state => ({
    // rodents: Object.values(state.entities.rodents)
});

const mapDispatchToProps = dispatch => ({
    createTour: tour => dispatch(createTour(tour))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TourMap);
