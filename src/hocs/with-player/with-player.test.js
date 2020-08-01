// import React from "react";
// import PropTypes from "prop-types";
// import renderer from "react-test-renderer";
// import {films} from "../../test-mocks.js";
// import withPlayer from "./with-player.js";

// const MockComponent = (props) => {
//   const {children} = props;

//   return (
//     <div>
//       {children}
//     </div>
//   );
// };

// MockComponent.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ]).isRequired,
// };

// const MockComponentWrapped = withPlayer(MockComponent);

// it(`withPlayer is rendered correctly`, () => {
//   const tree = renderer.create((
//     <MockComponentWrapped
//       film={films[0]}
//       isPlaying={true}
//       progress={0}
//       onPlayButtonClick={() => {}}
//       onFullScreenButtonClick={() => {}}
//     />
//   ), {
//     createNodeMock() {
//       return {};
//     }
//   }).toJSON();

//   expect(tree).toMatchSnapshot();
// });
