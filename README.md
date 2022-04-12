# 🗳 ethereum voting dapp

ethereum 기반 voting dapp입니다.

### 🗳 Directory

```markdown
├── contracts/
│ ├── artifacts/ - contract 정보 (abi, binary 등)
│ └── Voting.sol - voting contract
│
├── README.md - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json - 사용 package 목록
```

### 🗳 Implement

#### contract 구현 (Voting.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract Voting {
    bytes32[] public candidateList; // 후보자 리스트
    mapping(bytes32 => uint8) public votesReceived; // 각 후보자 해시형 득표수 (kim -> 10)

    constructor(bytes32[] memory candidateNames) {
        candidateList = candidateNames;
    }

    /**
    function 총 3개

    1. voteForCandidate : 특정 후보자에게 투표하면 득표수 + 1 되는 함수
    2. totalVotesFor(읽기 전용) : 각 후보자의 전체 득표수
    3. validCandidate(읽기 전용) : 후보자 리스트에 존재하는 후보자인지 유효성 검사
     */

    function voteForCandidate(bytes32 candidate) public {
        require(validCandidate(candidate));
        votesReceived[candidate] += 1;
    }

    function totalVotesFor(bytes32 candidate) public view returns (uint8) {
        require(validCandidate(candidate));
        return votesReceived[candidate];
    }

    function validCandidate(bytes32 candidate) public view returns (bool) {
        for (uint256 i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
}
```

### 🗳 Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

###
