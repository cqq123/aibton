import { connect } from 'react-redux';
import Publish from '../Publish';
import { changeProjectType, getProjectType, changeProjectBranch } from '../data/actions';

const mapStateToProps = ({ publish }) => ({
  projectType: publish.projectType,
  projectTypeList: publish.projectTypeList,
  projectBranch: publish.projectBranch,
});
const mapDispatchToProps = {
  changeProjectType,
  getProjectType,
  changeProjectBranch,
};
export default connect(mapStateToProps, mapDispatchToProps)(Publish);
