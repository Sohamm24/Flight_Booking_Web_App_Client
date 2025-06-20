import SHA256 from 'crypto-js/sha256';

const CreateItinenary = (price,userid ) => {
  console.log(userid,price)
  const input = `${userid}-${price}`;
  const itinenaryId =  SHA256(input).toString();
  return itinenaryId
}

const GetItinenary = (itinenaryId) => {


}


export { CreateItinenary,GetItinenary }