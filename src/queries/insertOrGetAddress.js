import pool from '../database.js';

export default async function insertOrGetAddress(addressData) {
  const isExistingAddress = await pool.query(
    'SELECT * FROM address WHERE street iLIKE $1 AND number = $2 AND complement iLIKE $3 AND zipcode = $4 AND neighborhood iLIKE $5 AND city iLIKE $6 AND state_id = $7;',
    addressData,
  );

  if (isExistingAddress.rowCount > 0) return isExistingAddress.rows[0].id;

  const newAddressId = (
    await pool.query(
      'INSERT INTO address (street, number, complement, zipcode, neighborhood, city, state_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;',
      addressData,
    )
  ).rows[0].id;

  return newAddressId;
}
