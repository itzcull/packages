import { createDBConnectionString } from './database' // replace with actual path

describe('createDBConnectionString', () => {
  it('should create a simple PostgreSQL connection string', () => {
    expect(createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase')).toBe(
      'postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase',
    )
  })

  it('should create a MySQL connection string with protocol', () => {
    expect(createDBConnectionString('jane_doe', 'anotherP@ss', 'db.example.com', 'exampleDB', undefined, 'mysql')).toBe(
      'mysql://jane_doe:anotherP@ss@db.example.com/exampleDB',
    )
  })

  it('should create a PostgreSQL connection string with SSL and port params', () => {
    expect(
      createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase', {
        ssl: 'true',
        port: '5432',
      }),
    ).toBe('postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase?ssl=true&port=5432')
  })

  it('should create a PostgreSQL connection string with empty params', () => {
    expect(createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase', {})).toBe(
      'postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase',
    )
  })

  it('should not apply params with undefined value', () => {
    expect(
      createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase', {
        test1: undefined,
        test2: null,
      }),
    ).toBe('postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase')
  })

  it('should create a PostgreSQL connection string with special characters in params', () => {
    expect(
      createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase', { pool_size: '20' }),
    ).toBe('postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase?pool_size=20')
  })

  it('should create a PostgreSQL connection string with multiple params', () => {
    expect(
      createDBConnectionString('john_doe', 'mySecureP@ss', 'db.example.com', 'myDatabase', {
        retry: '3',
        timeout: '5000',
      }),
    ).toBe('postgresql://john_doe:mySecureP@ss@db.example.com/myDatabase?retry=3&timeout=5000')
  })

  it('should create a MySQL connection string with SSL param', () => {
    expect(
      createDBConnectionString('jane_doe', 'anotherP@ss', 'db.example.com', 'exampleDB', { ssl: 'true' }, 'mysql'),
    ).toBe('mysql://jane_doe:anotherP@ss@db.example.com/exampleDB?ssl=true')
  })

  it('should return undefined if user is missing', () => {
    expect(() => createDBConnectionString('', 'mySecureP@ss', 'db.example.com', 'myDatabase')).toThrow()
  })

  it('should return undefined if password is missing', () => {
    expect(() => createDBConnectionString('john_doe', '', 'db.example.com', 'myDatabase')).toThrow()
  })

  it('should return undefined if host is missing', () => {
    expect(() => createDBConnectionString('john_doe', 'mySecureP@ss', '', 'myDatabase')).toThrow()
  })
})
