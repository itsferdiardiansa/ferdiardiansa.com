import { DocumentData, SnapshotMetadata, doc, getDoc } from 'firebase/firestore'
import db from '@/firestore'

// enum ErrorCode {
//   UNAUTHORIZED          = 401,
//   FORBIDDEN             = 403,
//   NOT_FOUND              = 404,
//   INTERNAL_SERVER_ERROR = 500
// }

type SuccesResponseBaseMetadata = {
  kind: `oxcyn#${string}`
  data: DocumentData
  metadata: SnapshotMetadata
}

// type ErrorResponse = {
//   code: ErrorCode
//   message: string | undefined
//   errors: string[]
// }

export async function getBaseMetadata(): Promise<SuccesResponseBaseMetadata> {
  const ref = doc(db, 'metadata', 'baseMetadata')
  const docBaseMetadataSnap = await getDoc(ref)

  const { data: documentData, ...restData } = docBaseMetadataSnap

  // console.log("getBaseMetadat invoked")
  return {
    kind: 'oxcyn#getBaseMetadata',
    data: <DocumentData>docBaseMetadataSnap.data(),
    ...restData,
  }
  // } catch (e) {
  //   return {
  //     code: ErrorCode.NOT_FOUND,
  //     message: "Document doesn't exist!",
  //     errors: []
  //   }
  // }
}
