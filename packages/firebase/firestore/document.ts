import {
  doc,
  getDoc,
  type SnapshotMetadata,
  DocumentData,
} from 'firebase/firestore'
import type { SuccessResponseData, ResponseActionKind } from '@oxcyn/response'
import { db } from '..'

export async function getDocumentCollections<ResponseType = DocumentData>(
  documentName: string,
  collectionName: string,
  actionKind: ResponseActionKind
): Promise<SuccessResponseData<ResponseType, SnapshotMetadata>> {
  const ref = doc(db, documentName, collectionName)
  const docSnapshot = await getDoc(ref)

  const { data: documentData, ...restData } = docSnapshot

  return {
    kind: actionKind,
    code: 200,
    data: <ResponseType>docSnapshot.data(),
    ...restData,
  }
}
