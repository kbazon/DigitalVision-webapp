const request = require("supertest");
const mysql = require("mysql");

// Mockanje MySQL konekcije
const mockConnection = {
  query: jest.fn(),
  connect: jest.fn((cb) => cb()),
  end: jest.fn(),
};

jest.mock("mysql", () => ({
  createConnection: jest.fn(() => mockConnection),
}));

// Pomoćna funkcija za normalizaciju SQL upita
const normalizeSql = (sql) => sql.replace(/\s+/g, " ").trim();

const app = require("./indeks"); // Pobrini se da indeks.js exporta 'app' instancu

// clean mockove prije svakog testa
beforeEach(() => {
  mockConnection.query.mockClear();
});

// Test za /api/user-favorites endpoint
describe("GET /api/user-favorites", () => {
  // Definiram očekivani SQL upit
  const expectedSql = normalizeSql(`
    SELECT C.ID_Crteza, C.slika, C.Naslov_crteza
    FROM Favorites F
    JOIN Art C ON F.ID_Crteza = C.ID_Crteza
    JOIN Artist A ON F.ID_Umjetnika = A.ID_Umjetnika
    WHERE A.Mail_Umjetnika = ?
  `);

  // Test 1: Uspješno dohvaćanje favorita za validan email
  test("treba vratiti korisnikove favorite za validan email", async () => {
    const testEmail = "test@primjer.com";
    const mockFavorites = [
      { ID_Crteza: 1, slika: "slika1.jpg", Naslov_crteza: "Crtež 1" },
      { ID_Crteza: 2, slika: "slika2.png", Naslov_crteza: "Crtež 2" },
    ];

    // mock ponašanje za uspješno dohvaćanje
    mockConnection.query.mockImplementationOnce((sql, params, callback) => {
      callback(null, mockFavorites);
    });

    const response = await request(app).get(
      `/api/user-favorites?email=${testEmail}`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockFavorites);

    expect(mockConnection.query).toHaveBeenCalledTimes(1);

    // uhvati SQL upit i normaliziraj ga
    const actualSql = mockConnection.query.mock.calls[0][0];
    const normalizedActualSql = normalizeSql(actualSql);

    // usporedba normalizirane verzije SQL upita
    expect(normalizedActualSql).toBe(expectedSql);

    expect(mockConnection.query).toHaveBeenCalledWith(
      actualSql,
      [testEmail],
      expect.any(Function)
    );
  });

  // Test 2: Vraća 400 ako email nije pružen
  test("treba vratiti gresku 400 za nevalidan email", async () => {
    const response = await request(app).get("/api/user-favorites"); // Bez query parametra 'email'

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: "Email je obavezan" });

    expect(mockConnection.query).not.toHaveBeenCalled();
  });

  // Test 4: Vraća prazan niz ako korisnik nema favorita
  test("treba vratiti prazan niz ako korisnik nema favorita", async () => {
    const testEmail = "user_no_favorites@primjer.com";

    // Mock za korisnika bez favorita
    mockConnection.query.mockImplementationOnce((sql, params, callback) => {
      callback(null, []); // Vraća prazan niz
    });

    const response = await request(app).get(
      `/api/user-favorites?email=${testEmail}`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([]); // očekujemo prazan niz

    expect(mockConnection.query).toHaveBeenCalledTimes(1);
    const actualSql = mockConnection.query.mock.calls[0][0];
    const normalizedActualSql = normalizeSql(actualSql);
    expect(normalizedActualSql).toBe(expectedSql);
    expect(mockConnection.query).toHaveBeenCalledWith(
      actualSql,
      [testEmail],
      expect.any(Function)
    );
  });
});
