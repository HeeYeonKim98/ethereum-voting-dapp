# π³ ethereum voting dapp

ethereum κΈ°λ° voting dappμλλ€.

### π³ Directory

```markdown
βββ contracts/
β βββ artifacts/ - contract μ λ³΄ (abi, binary λ±)
β βββ Voting.sol - voting contract
β
βββ README.md - λ¦¬λλ―Έ(νλ¦¬λ·°, λ°°ν¬λ§ν¬, μ½λμ»¨λ²€μ)
βββ package.json - μ¬μ© package λͺ©λ‘
```

### π³ Implement

#### contract κ΅¬ν (Voting.sol)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract Voting {
    bytes32[] public candidateList; // νλ³΄μ λ¦¬μ€νΈ
    mapping(bytes32 => uint8) public votesReceived; // κ° νλ³΄μ ν΄μν λνμ (kim -> 10)

    constructor(bytes32[] memory candidateNames) {
        candidateList = candidateNames;
    }

    /**
    function μ΄ 3κ°

    1. voteForCandidate : νΉμ  νλ³΄μμκ² ν¬ννλ©΄ λνμ + 1 λλ ν¨μ
    2. totalVotesFor(μ½κΈ° μ μ©) : κ° νλ³΄μμ μ μ²΄ λνμ
    3. validCandidate(μ½κΈ° μ μ©) : νλ³΄μ λ¦¬μ€νΈμ μ‘΄μ¬νλ νλ³΄μμΈμ§ μ ν¨μ± κ²μ¬
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

### π³ Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        νλ‘μ νΈ μμ        |
| :sparkles: |      Feat      |      μλ‘μ΄ κΈ°λ₯ μΆκ°       |
|   :bug:    |      Fix       |          λ²κ·Έ μμ           |
| :recycle:  |    Refactor    |        μ½λ λ¦¬ν©ν°λ§        |
| :lipstick: |     Style      |   μ€νμΌ μΆκ° λ° μλ°μ΄νΈ   |
| :package:  |     Chore      |   ν¨ν€μ§ μΆκ° λ° μλ°μ΄νΈ   |
|  :books:   |      Docs      | κ·Έ μΈ λ¬Έμ μΆκ° λ° μλ°μ΄νΈ |

### <br/>

###
