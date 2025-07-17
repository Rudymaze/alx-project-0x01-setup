export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// import Foundation

// // MARK: - UserProps
// struct UserProps: Codable {
//     let id: Int
//     let name, username, email: String
//     let address: Address
//     let phone, website: String
//     let company: Company
// }

// // MARK: - Address
// struct Address: Codable {
//     let street, suite, city, zipcode: String
//     let geo: Geo
// }

// // MARK: - Geo
// struct Geo: Codable {
//     let lat, lng: String
// }

// // MARK: - Company
// struct Company: Codable {
//     let name, catchPhrase, bs: String
// }
