import affiliationFacultyAssociation from "./affiliationFaculty.association";

import mAdressAssociation from "./mAdress.association";

export default (db) => {
  //
  // formFileAssociation(db);
  userAssociation(db);
  qRDocumentAssociation(db);
};
