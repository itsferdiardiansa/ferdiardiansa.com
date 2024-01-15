import { DocumentData, SnapshotMetadata, doc, getDoc } from 'firebase/firestore'
import { SuccessResponseData } from '@oxcyn/response'
import { db } from '@oxcyn/firebase'

export async function getBaseMetadata(): Promise<
  SuccessResponseData<DocumentData, SnapshotMetadata>
> {
  const ref = doc(db, 'metadata', 'baseMetadata')
  const docBaseMetadataSnap = await getDoc(ref)

  const { data: documentData, ...restData } = docBaseMetadataSnap

  return {
    kind: 'oxcyn#getBaseMetadata',
    code: 200,
    data: <DocumentData>docBaseMetadataSnap.data(),
    ...restData,
  }
}
