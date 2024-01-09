// Tạo mảng cầu thủ cho từng đội
let players1 = ['Neuer', 'Pavard', 'Boateng', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Sane'];
let players2 = ['Courtois', 'Carvajal', 'Varane', 'Militao', 'Nacho', 'Modric', 'Casemiro', 'Kroos', 'Hazard', 'Benzema', 'Vinicius'];

// Tạo mảng allPlayers
let allPlayers = [players1, players2];

// Tạo mảng players1Final với 3 cầu thủ thay thế
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Tạo biến tỉ lệ kết quả trận đấu
let game = {
  odds: {
    team1: 1.5,
    draw: 2.8,
    team2: 3.2
  }
};

let { team1, draw, team2 } = game.odds;

// Hàm in ra tên cầu thủ đã ghi bàn
function printGoals(...scorers) {
  for (let i = 0; i < scorers.length; i++) {
    console.log(`${scorers[i]} đã ghi bàn`);
  }
}

// Gọi hàm printGoals với các tên cầu thủ đã ghi bàn
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// In ra đội chiến thắng không sử dụng if/else hoặc toán tử 3 ngôi
let winner = team1 > team2 ? 'team1' : team2 > team1 ? 'team2' : 'draw';
console.log(`Đội chiến thắng là: ${winner}`);

