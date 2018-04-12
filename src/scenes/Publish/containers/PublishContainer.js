import { connect } from 'react-redux';
import Publish from '../Publish';
import { changeProjectType, getProjectType, changeProjectBranch, getBranch, changeProjectRunType, publish, getRunstatus } from '../data/actions';

const mapStateToProps = ({ publish }) => ({
  projectType: publish.projectType,
  projectTypeList: publish.projectTypeList,
  projectBranch: publish.projectBranch,
  branchList: publish.branchList,
  projectRunType: publish.projectRunType,
  isPublish: publish.isPublish,
  runStatusInfo: publish.runStatusInfo,
});
const mapDispatchToProps = {
  changeProjectType,
  getProjectType,
  changeProjectBranch,
  getBranch,
  changeProjectRunType,
  publish,
  getRunstatus,
};
export default connect(mapStateToProps, mapDispatchToProps)(Publish);
