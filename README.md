Next14 & React18

FrontEnd jest 라이브러리를 이용한 테스트코드 작성

```

toBe() : 해당 값과 일치하면 통과
toBeNull() toBeUndefined() toBeDefined() : 인 경우 통과
toBeTruthy() toBeFasly() : boolean 값 판별
toBeGreaterThan 등… : 이상, 이하, 초과, 미만
toMatch(/H/) : 정규 표현식으로 문자열 판단

toEqual() : 참조값(객체, 배열)을 비교할 때. 해당 값 포함하면 true
toStrictEqual() : 더 엄격한 비교. 완전히 똑같아야 true
toContain() : 배열에서 아이템 포함되어 있는지
ex) expect(["a", "b", "c"]).toContain("a")


describe('그룹 테스트 설명 문자열', () => {
const a = 1, b = 2; // 테스트에 사용할 일회용 가짜 변수 선언

    test('개별 테스트 설명 문자열', () => {
       expect(검증대상).toXxx(기대결과);
    });

});

```

@출처 https://velog.io/@skyu_dev/Jest-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-JS%EC%9D%98-%EA%B8%B0%EB%8A%A5-%EC%A0%90%EA%B2%80%ED%95%98%EA%B8%B0

@강의 https://www.youtube.com/watch?v=g4MdUjxA-S4
