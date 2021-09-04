import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeFilter, changeDuration} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeFilter: tag => dispatch(changeFilter(tag)),
  changeDuration: durationMod => dispatch(changeDuration(durationMod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
