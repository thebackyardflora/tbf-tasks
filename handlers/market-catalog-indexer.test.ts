import {handler} from "./market-catalog-indexer";
import {prismaMock} from "../test/prisma-mock";
import {faker} from '@faker-js/faker';
import {vi} from "vitest";

describe("market-catalog-indexer", () => {
  it('should log the user count', async () => {
    const fakeUserCount = faker.datatype.number();
    const consoleSpy = vi.spyOn(console, 'log');
    consoleSpy.mockImplementationOnce(() => {});

    prismaMock.user.count.mockResolvedValue(fakeUserCount);

    await handler({} as never, {} as never, async () => {
    });

    expect(prismaMock.user.count).toHaveBeenCalledOnce();
    expect(consoleSpy).toHaveBeenCalledWith({userCount: fakeUserCount});
  })
})