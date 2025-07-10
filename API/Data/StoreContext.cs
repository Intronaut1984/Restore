using API.Entities;
using Microsoft.EntityFrameworkCore;
// using API.Entities.Basket;

namespace API.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }
}
