#include <iostream>
#include <vector>

int getAverage(std::vector <int> marks) {
  int sum = 0;
  for (int mark : marks) {
    sum += mark;
  }
  return sum / marks.size();
}

int main() {

  return 0;
}
