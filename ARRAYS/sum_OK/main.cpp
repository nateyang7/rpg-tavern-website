#include <iostream>
#include <vector>

int sum(std::vector<int> numbers) {
  int sum = 0;
  for (int number : numbers) {
    sum += number;
  }
  return sum;
}

int main() {
  std::vector<int> grades = {1, 2, 3};
  int sumGrades = sum(grades);
  
  std::cout << sumGrades << std::endl;

  return 0;
}
